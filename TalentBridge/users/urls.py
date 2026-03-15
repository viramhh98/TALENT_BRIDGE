from django.urls import path
from . import views

urlpatterns = [
    path('api/register-employer/', views.register_employer, name='register_employer'),
    path('api/register-jobseeker/', views.register_jobseeker, name='register_jobseeker'),
    path('api/login/', views.login, name='login'),
    path('api/logout/', views.logout_view, name='logout'),
    path('api/profile/<int:user_id>/', views.profile, name='profile'),
]
