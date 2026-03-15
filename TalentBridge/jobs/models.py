from django.db import models
from users.models import Employer
from django.utils import timezone

class Job(models.Model):
    EMPLOYMENT_TYPE_CHOICES = (
        ('full-time', 'Full-Time'),
        ('part-time', 'Part-Time'),
        ('contract', 'Contract'),
        ('internship', 'Internship'),
    )

    employer = models.ForeignKey(Employer, on_delete=models.CASCADE, related_name='jobs')
    job_title = models.CharField(max_length=255)
    job_description = models.TextField()
    job_location = models.CharField(max_length=255, blank=True, null=True)
    salary_range = models.CharField(max_length=100, blank=True, null=True)
    employment_type = models.CharField(max_length=20, choices=EMPLOYMENT_TYPE_CHOICES)
    posted_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.job_title

    class Meta:
        ordering = ['-posted_at']  # Most recent jobs first
