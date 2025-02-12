from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404,render
from .models import Application
from jobs.models import Job
from users.models import Jobseeker,User
import json
@csrf_exempt
def apply_job(request, job_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        try:
            job = Job.objects.get(id=job_id)
            jobseeker = Jobseeker.objects.get(user_id=data['user_id'])  # assuming user ID is passed
            application = Application.objects.create(
                job=job,
                jobseeker=jobseeker
            )
            return JsonResponse({'message': 'Application submitted successfully', 'application_id': application.id}, status=201)
        except (Job.DoesNotExist, Jobseeker.DoesNotExist):
            return JsonResponse({'error': 'Job or Jobseeker not found'}, status=404)

@csrf_exempt
def application_status(request, application_id):
    try:
        application = Application.objects.get(id=application_id)
        return JsonResponse({
            'application_id': application.id,
            'job_title': application.job.job_title,
            'application_status': application.application_status,
            'applied_at': application.applied_at,
        })
    except Application.DoesNotExist:
        return JsonResponse({'error': 'Application not found'}, status=404)
    




@csrf_exempt
def apply_job_jobseeker(request, job_id):
    if request.method == "POST":
        job_detail = get_object_or_404(Job, id=job_id)

        # Extract user data from POST request
        userdetails = request.POST.get('user')
        user = get_object_or_404(User, username=userdetails)

        # Retrieve jobseeker
        jobseeker = get_object_or_404(Jobseeker, user=user)

        # Retrieve file from the request
        resume_file = request.FILES.get('file')
        if not resume_file:
            return JsonResponse({"error": "Resume file is required"}, status=400)
        
        # Create the application
        application = Application.objects.create(
            job=job_detail,
            jobseeker=jobseeker,
            resume_url=resume_file,
        )

        return JsonResponse({
            "message": "Application submitted successfully",
            "application_id": application.id,
        }, status=201)

    return JsonResponse({"error": "Invalid request method"}, status=405)



@csrf_exempt  # Only for development; handle CSRF properly in production
def applied(request):
    if request.method == 'GET':
        userdetails = request.GET.get('user')  # Get the user from query parameters

        if not userdetails:
            return JsonResponse({'error': 'No user provided'}, status=400)

        user = get_object_or_404(User, username=userdetails)
        jobseeker = get_object_or_404(Jobseeker, user=user)

        try:
            print("User requested:", userdetails)
            applications = Application.objects.filter(jobseeker=jobseeker)

            details = [
                {
                    'jobTitle': detail.job.job_title,
                    'companyName': detail.job.employer.company_name,
                    'applicationDate': detail.applied_at.isoformat(),
                    'status':detail.application_status # Use ISO format for date
                }
                for detail in applications
            ]

            return JsonResponse(details, safe=False)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)  # Handle non-GET requests

@csrf_exempt
def applied_candidate(request,job_id):
    job_detail = get_object_or_404(Job, id=job_id)
    candidate=Application.objects.filter(job=job_detail,application_status='applied')
    print(candidate,"hi")
    details = [
                {
                    'id': detail.id,
                    'name': detail.jobseeker.first_name,
                    'email': detail.jobseeker.user.email,
                }
                for detail in candidate
            ]
    return JsonResponse(details, safe=False)



@csrf_exempt
def update_status(request, applicant_id):
    # Only allow PATCH or POST methods
    if request.method not in ['POST', 'PATCH']:
        return JsonResponse({"error": "Only POST or PATCH methods are allowed."}, status=405)

    try:
        # Retrieve the application object by ID
        application = Application.objects.get(id=applicant_id)
    except Application.DoesNotExist:
        # Return a 404 response if the application is not found
        return JsonResponse({"error": "Application not found."}, status=404)

    # Parse the incoming JSON data
    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON."}, status=400)

    # Get the status from the JSON payload
    status_to_update = data.get('status')

    if status_to_update:
        # Update the application status
        application.application_status = status_to_update
        application.save()

        # Return a success response with the updated data
        return JsonResponse({"done": "true"}, status=200)
    else:
        # Return a 400 response if the status is not provided
        return JsonResponse({"error": "Status not provided."}, status=400)
