/*  Author : @vinitkumar321
    Jenkinsfile (Declarative Pipeline)
    Requires the Docker Pipeline plugin 
*/

pipeline {
    agent {
        node {
            label 'my-nodejs-agent'
        }
    }

    tools {nodejs "nodejs"}

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'npm install --production'
                sh 'pm2 restart jobapplicationmanager'
            }
        }
    }
}