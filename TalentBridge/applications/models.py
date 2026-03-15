from django.db import models
from jobs.models import Job
from users.models import Jobseeker
from django.utils import timezone

class Application(models.Model):
    APPLICATION_STATUS_CHOICES = (
        ('applied', 'Applied'),
        ('interviewed', 'Interviewed'),
        ('rejected', 'Rejected'),
        ('hired', 'Hired'),
    )

    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='applications')
    jobseeker = models.ForeignKey(Jobseeker, on_delete=models.CASCADE, related_name='applications')
    application_status = models.CharField(max_length=20, choices=APPLICATION_STATUS_CHOICES, default='applied')
    resume_url=models.FileField(upload_to='resumes/',default=None)
    applied_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Application {self.id} for {self.jobseeker.user.email} on {self.job.job_title}"

    class Meta:
        ordering = ['-applied_at']  # Most recent applications first
