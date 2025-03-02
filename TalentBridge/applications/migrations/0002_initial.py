# Generated by Django 5.1.1 on 2024-09-21 12:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('applications', '0001_initial'),
        ('jobs', '0001_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='job',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jobs.job'),
        ),
        migrations.AddField(
            model_name='application',
            name='jobseeker',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.jobseeker'),
        ),
    ]
