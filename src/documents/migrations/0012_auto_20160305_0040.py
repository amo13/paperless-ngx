# Generated by Django 1.9.2 on 2016-03-05 00:40

from django.db import migrations


def move_documents_and_create_thumbnails(apps, schema_editor):
    # Modified 2023-07-26 to do nothing after the removal of GPG encryption.
    # New installs will not have encrypted files
    # Existing installation must update to a pre x.y.z and decrypt documents
    pass


class Migration(migrations.Migration):
    dependencies = [
        ("documents", "0011_auto_20160303_1929"),
    ]

    operations = [
        migrations.RunPython(move_documents_and_create_thumbnails),
    ]
