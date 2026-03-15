from django.db import models
from django.contrib.auth.models import User

# Employer model linked to Django's default User model
class Employer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=255)
    company_website = models.URLField(blank=True, null=True)
    company_description = models.TextField(blank=True, null=True)
    contact_person_name = models.CharField(max_length=255, blank=True, null=True)
    contact_person_phone = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.company_name

# Jobseeker model linked to Django's default User model
class Jobseeker(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    skills = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
