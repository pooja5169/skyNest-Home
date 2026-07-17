pipeline {

    agent any

    stages {

        stage('Verify') {
            steps {
                sh 'ls -l'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                scp -r * root@52.66.172.110:/testing/
                '''
            }
        }

    }

}
