pipeline{
    agent any

    stages{
        stage ('checkout'){
            steps{
            //    git url: 'file:///E:/All-Projects-Here/COMPLETED-PROJECTS/Mean-backend-with-nodejs/Health-app', branch: 'main'
            git url: 'https://github.com/samiafatima861/healthapp.git', branch: 'main', credentialsId: 'github-pat'

            }
        }

        stage('build'){
            steps{
                bat 'docker-compose build'
            }
        }

        stage('Tag Image'){
            steps{
                bat 'docker tag health-app samiafatima/health-app:latest'
            }
        }

        stage ('Push Image'){
            steps{
                // bat 'docker login -u samia979 -p samia123fatima'
                // bat  'docker push samiafatima/health-app:latest'
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                        bat 'docker push samiafatima/health-app:latest'
                        
                    }
                }
            }
        }
    }
}