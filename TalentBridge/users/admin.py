from django.contrib import admin
from .models import Employer, Jobseeker

# Register Employer and Jobseeker models
admin.site.register(Employer)
admin.site.register(Jobseeker)
