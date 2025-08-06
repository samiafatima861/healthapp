pipeline {
    agent any
    environment{
        SSH_KEY_PATH='C:\\Users\\dell\\Downloads\\login.pem'
        SSH_USER='ec2-user'
        SSH_HOST='52.65.12.156'
    }

    stages {
        stage('checkout') {
            steps {
                // Optional: Local file checkout (commented out)
                // git url: 'file:///E:/All-Projects-Here/COMPLETED-PROJECTS/Mean-backend-with-nodejs/Health-app', branch: 'main'
                git url: 'https://github.com/samiafatima861/healthapp.git', branch: 'main', credentialsId: 'github-pat'
            }
        }

        stage('build') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Tag Image') {
            steps {
                bat 'docker tag health-app samiafatima/health-app:latest'
            }
        }

        stage('Push Image') {
            steps {
                script {
                    withCredentials([usernamePassword(
                        credentialsId: 'docker-hub-creds',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )]) {
                        // Login securely using password-stdin 
                        // bat '''
                        //  echo %pinkpanther% | docker login -u %samia979% 
                        // '''
                       bat "docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%"
                        // Push the image
                        bat 'docker push samia979/health-app:latest'
                        
                    }
                }
            }
        }
        stage('Deploy'){
            steps{
                bat """
                ssh -i ${SSH_KEY_PATH} -o StrictHostChecking=no ${SSH_USER}@${SSH_HOST}

                """
            }
        }
    }
}
