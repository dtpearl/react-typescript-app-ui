import React, { useState } from 'react';
import { withCreateTask, CreateTaskProps } from '../generated/graphql';

interface FormState {
    title: string;
}

const defaultState: FormState = {
    title: ''
};

interface ExposedProps {
    onTaskCreated: () => void;
}

type AllProps = CreateTaskProps<ExposedProps>;

const CreateTaskForm: React.FunctionComponent<AllProps> = ({mutate, onTaskCreated}) => {

    const [ formState, setFormState ] = useState<FormState>(defaultState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormState({
            title: value
        });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (mutate) {
            const result = await mutate({
                variables: {
                    input: formState
                }
            });
            if (result && result.data && result.data.createTask) {
               setFormState({
                   title: ''
               });
               onTaskCreated();
            }
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                name="title" 
                placeholder="What would you like to add?" 
                autoComplete="off"
                value={formState.title}
                onChange={onChange}
            />
            <style jsx>
                {
                 `
                    form {
                        margin: 0 0 -1px;
                    }
                    input {
                        border: 1px solid #dde5ff;
                        border-radius: 4px 4px 0 0;
                        color: #5d647b;
                        font-size: 18px;
                        padding: 20px 15px;
                        position: relative;
                        width: 100%;
                    }
                    input:focus {
                        border-color: #7694f5;
                        border-radius: 4px;
                        box-shadow: 0 0 0 4px #dde5ff;
                        outline: none;
                        z-index: 10;
                    }
               `   
                }
            </style>
        </form>
    );
};

export default withCreateTask<ExposedProps>()(CreateTaskForm);