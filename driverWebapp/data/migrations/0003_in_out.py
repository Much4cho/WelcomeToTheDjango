# Generated by Django 2.0.9 on 2018-11-24 22:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0002_auto_20181124_2201'),
    ]

    operations = [
        migrations.CreateModel(
            name='In',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('OnlyCars', models.BooleanField(default=False)),
                ('NodeIn', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='NodeIn', to='data.Node')),
            ],
        ),
        migrations.CreateModel(
            name='Out',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('OnlyCars', models.BooleanField(default=False)),
                ('NodeOut', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='NodeOut', to='data.Node')),
            ],
        ),
    ]
