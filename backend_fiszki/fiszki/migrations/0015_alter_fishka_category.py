# Generated by Django 4.0.5 on 2022-11-30 07:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fiszki', '0014_friendrequest'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fishka',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='fiszki.category'),
            preserve_default=False,
        ),
    ]
