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
                scp -r * root@192.168.237.160:/website/
                '''
            }
        }

    }

}