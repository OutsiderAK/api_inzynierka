# Generated by Django 4.0.5 on 2022-11-15 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fiszki', '0010_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='quiz',
            name='slug',
            field=models.SlugField(default='/'),
        ),
    ]
