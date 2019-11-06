import React from 'react';
import { NextPage } from 'next';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

interface InitialProps {
    greeting: string;
}

interface Props extends InitialProps {

}

const tasksQuery = gql`
query Tasks($status: TaskStatus) {
    tasks(status: $status){
      id
      title
      status
    }
}
`;

const IndexPage: NextPage<Props, InitialProps> = props => {
    return <div>{props.greeting}</div>
};

IndexPage.getInitialProps = async () => ({
    greeting: 'Hello Everyone!'
})

export default IndexPage;