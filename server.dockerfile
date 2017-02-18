FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD server/requirements.txt /code/
RUN pip install -r requirements.txt
ADD server/ /code/
