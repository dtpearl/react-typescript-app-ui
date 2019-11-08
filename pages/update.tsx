import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import UpdateTaskForm from '../components/UpdateTaskForm';
import { TaskComponent } from '../generated/graphql';

interface InitialProps {
    id: number;
}

interface AllProps extends InitialProps {

}

const UpdatePage: NextPage<AllProps, InitialProps> = ({ id }) => {
    return <Layout>{
        id ? (<TaskComponent variables={{ id }}>
                { ({ loading, error, data}) => {
                        if (loading) {
                            return <p>Loading...</p>;
                        } else if (error) {
                            return <p>An error occured.</p>
                        }

                        const task = data && data.task ? data.task : null;

                        return task ? (<UpdateTaskForm initialInput={{
                            id: task.id,
                            title: task.title
                        }} />) : (<p>Task not found.</p>)
                    }
                }
            </TaskComponent>) : <p>Invalid id</p>
    }</Layout>
};

UpdatePage.getInitialProps = async (ctx) => {
    return {
        id: typeof ctx.query.id === 'string' ? Number(ctx.query.id) : NaN
    };
};

export default UpdatePage;