# Generated by Django 4.0.5 on 2022-11-13 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fiszki', '0009_alter_question_quiz'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
                ('img', models.CharField(max_length=256)),
                ('description', models.CharField(max_length=512)),
            ],
        ),
    ]
