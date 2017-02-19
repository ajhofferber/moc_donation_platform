from django.conf import settings
from storages.backends.s3boto import S3BotoStorage


class MediaStorage(S3BotoStorage):
    location = settings.MEDIAFILES_LOCATION

    def __init__(self, *args, **kwargs):
        kwargs['custom_domain'] = settings.AWS_CLOUDFRONT_DOMAIN or settings.AWS_BUCKET_DOMAIN
        super().__init__(*args, **kwargs)
