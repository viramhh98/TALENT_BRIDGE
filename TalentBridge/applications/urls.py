from django.urls import path
from . import views

urlpatterns = [
    path('api/apply/<int:job_id>/', views.apply_job_jobseeker, name='apply_job_jobseeker'),  # Apply for a job
    path('api/application/status/<int:application_id>/', views.application_status, name='application_status'),  # Check application status
    path('api/applied/', views.applied , name='applied'),
    path('api/applied/<int:job_id>/', views.applied_candidate , name='applied_candidate'),
    path('api/update-status/<int:applicant_id>/', views.update_status, name='update_status'),
]
