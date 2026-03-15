from django.urls import path
from . import views

urlpatterns = [
    path('api/employer-jobs/', views.employer_job_list, name='employer_job_list'),  # List all jobs
    path('api/jobs/', views.job_list, name='job_list'),  # List all jobs
    path('api/jobs/create/', views.create_job, name='create_job'),  # Create a new job
    path('api/jobs/<int:job_id>/', views.job_detail, name='job_detail'),  # Job detail view
    path('api/jobs/edit/<int:job_id>/', views.edit_job, name='edit_job'),  # Edit job
    path('api/jobs/delete/<int:job_id>/', views.delete_job, name='delete_job'),  # Delete job
]
