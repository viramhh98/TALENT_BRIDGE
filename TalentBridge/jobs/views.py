from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Job
import json
from django.contrib.auth.models import User
from users.models import Employer

@csrf_exempt
def job_list(request):
    if request.method == 'GET':
        jobs=Job.objects.all()
        job_list=[]
        for job in jobs:
            job_list.append({
                'id':job.id,
                'title':job.job_title,
                'description':job.job_description,
                'location':job.job_location,
                'type':job.employment_type
            })
        return JsonResponse(job_list,safe=False)

@csrf_exempt
def employer_job_list(request):
    data = request.GET
    try:
        user = User.objects.get(username=data['username'])
        employer = Employer.objects.get(user=user)
        jobs = employer.jobs.all()
        job_list=[]
        # Serialize job data
        for job in jobs:
            job_list.append(
                
                {
                'id': job.id,
                'title': job.job_title,
                'description': job.job_description,
                }
            
            )
             
        return JsonResponse(job_list, safe=False)

    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)
    except Employer.DoesNotExist:
        return JsonResponse({'error': 'Employer not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
@csrf_exempt
def create_job(request):
    if request.method == 'POST':
        data=request.POST
        print(data['job_title'])
        user=User.objects.get(username=data['username'])
        employer=Employer.objects.get(user=user)
        job = Job.objects.create(
            employer=employer,
            job_title=data['job_title'],
            job_description=data['job_description'],
            job_location=data['job_location'],
            salary_range=data['salary_range'],
            employment_type=data['employment_type'],
        )
        return JsonResponse({'message': 'Job created successfully', 'job_id': job.id}, status=201)

@csrf_exempt
def job_detail(request, job_id):
    try:
        job = Job.objects.get(id=job_id)
        return JsonResponse({
            'job_id': job.id,
            'job_title': job.job_title,
            'job_description': job.job_description,
            'job_location': job.job_location,
            'salary_range': job.salary_range,
            'employment_type': job.employment_type,
            'company_name':job.employer.company_name,
            'posted_at': job.posted_at,
        })
    except Job.DoesNotExist:
        return JsonResponse({'error': 'Job not found'}, status=404)

@csrf_exempt
def edit_job(request, job_id):
    try:
        job = Job.objects.get(id=job_id)
        if request.method == 'PUT':
            data = json.loads(request.body)
            job.job_title = data.get('job_title', job.job_title)
            job.job_description = data.get('job_description', job.job_description)
            job.job_location = data.get('job_location', job.job_location)
            job.salary_range = data.get('salary_range', job.salary_range)
            job.employment_type = data.get('employment_type', job.employment_type)
            job.save()
            return JsonResponse({'message': 'Job updated successfully'})
    except Job.DoesNotExist:
        return JsonResponse({'error': 'Job not found'}, status=404)

@csrf_exempt
def delete_job(request, job_id):
    try:
        job = Job.objects.get(id=job_id)
        job.delete()
        return JsonResponse({'message': 'Job deleted successfully'})
    except Job.DoesNotExist:
        return JsonResponse({'error': 'Job not found'}, status=404)
