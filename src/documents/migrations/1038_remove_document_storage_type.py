# Generated by Django 4.1.10 on 2023-07-26 18:27

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("documents", "1037_webp_encrypted_thumbnail_conversion"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="document",
            name="storage_type",
        ),
    ]
