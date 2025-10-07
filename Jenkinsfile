pipeline {
  agent any
  tools { nodejs 'node20' }

  environment {
    APP_NAME = 'novastore'
    IMAGE = "novastore-app:${env.BUILD_NUMBER}"
    PORT = '8082'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install & Build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }

    stage('Archive Build Artifact') {
      steps {
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }

    stage('Docker Build & Deploy') {
      steps {
        sh '''
          docker build -t $IMAGE .
          docker rm -f $APP_NAME || true
          docker run -d --name $APP_NAME -p ${PORT}:80 $IMAGE
        '''
      }
    }
  }

  post {
    success {
      echo "✅ Deployment successful! Visit http://localhost:${PORT}"
    }
    failure {
      echo "❌ Build failed. Check console output."
    }
  }
}
