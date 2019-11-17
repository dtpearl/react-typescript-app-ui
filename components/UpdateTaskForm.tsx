// import React, { useState } from 'react';
// import Router from 'next/router';
// import { withUpdateTask, UpdateTaskMutationFn } from '../generated/graphql';

// interface FormState {
//     id: number;
//     title: string;
// }

// interface ExposedProps {
//     initialInput: FormState;
// }

// interface UpdateTaskMutationProps {
//     updateTask?: UpdateTaskMutationFn;
// }

// interface AllProps extends ExposedProps, UpdateTaskMutationProps {}

// const UpdateTaskForm: React.FunctionComponent<AllProps> = ({ initialInput, updateTask }) => {

//     const [ formState, setFormState ] = useState<FormState>(initialInput);

//     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { value } = e.target;
//         setFormState({
//             ...formState,
//             title: value
//         });
//     };

//     const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (updateTask) {
//             const result = await updateTask({
//                 variables: { input: formState }
//             });
//             if (result && result.data && result.data.updateTask) {
//                 Router.push('/');
//             }
//         }
//     }

//     return (
//         <form onSubmit={onSubmit}>
//             <div className="formField">
//                 <label htmlFor="title">Title</label>
//                 <div>
//                     <input 
//                         type="text" 
//                         name="title" 
//                         className="textInput" 
//                         value={formState.title}
//                         onChange={onChange} 
//                     />
//                 </div>
//             </div>
//             <button type="submit">Save</button>
//             <style jsx>{`
//                 .formField {
//                     margin: 0 0 20px;
//                 }
//                 .textInput {
//                     border: 1px solid #dde5ff;
//                     border-radius: 4px;
//                     color: #5d647b;
//                     outline: 0;
//                     font-size: 18px;
//                     padding: 14px;
//                     width: 100%;
//                 }
//                 label {
//                     display: block;
//                     margin: 0 0 5px;
//                 }
//                 button {
//                     border: 2px solid #7694f5;
//                     border-radius: 4px;
//                     color: #7694f5;
//                     cursor: pointer;
//                     display: inline-block;
//                     font-weight: bold;
//                     font-size: 16px;
//                     outline: 0;
//                     padding: 12px 24px;
//                 }
//                 button:hover {
//                     background: #7694f5;
//                     color: white;
//                 }
//             `}
//             </style>
//         </form>
//     );
// };

// export default withUpdateTask<ExposedProps, UpdateTaskMutationProps>({
//     props: ({ mutate }) => ({ updateTask: mutate })
//   })(UpdateTaskForm);





import React, { useState } from 'react';
import Router from 'next/router';
import { withUpdateTask, UpdateTaskMutationFn } from '../generated/graphql';

interface FormState {
  id: number;
  title: string;
}

interface ExposedProps {
  initialInput: FormState;
}

interface UpdateTaskMutationProps {
  updateTask?: UpdateTaskMutationFn;
}

interface AllProps extends ExposedProps, UpdateTaskMutationProps {}

const UpdateTaskForm: React.FunctionComponent<AllProps> = ({
  initialInput,
  updateTask
}) => {
  const [formState, setFormState] = useState<FormState>(initialInput);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormState({
      ...formState,
      title: value
    });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (updateTask) {
      const result = await updateTask({
        variables: { input: formState }
      });
      if (result && result.data && result.data.updateTask) {
        Router.push('/');
      }
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="formField">
        <label>Title</label>
        <div>
          <input
            type="text"
            name="title"
            className="textInput"
            value={formState.title}
            onChange={onChange}
          />
        </div>
      </div>
      <button type="submit">Save</button>
      <style jsx>{`
        .formField {
          margin: 0 0 20px;
        }
        .textInput {
          border: 1px solid #dde5ff;
          border-radius: 4px;
          color: #5d647b;
          outline: 0;
          font-size: 18px;
          padding: 14px;
          width: 100%;
        }
        label {
          display: block;
          margin: 0 0 5px;
        }
        button {
          border: 2px solid #7694f5;
          border-radius: 4px;
          color: #7694f5;
          cursor: pointer;
          display: inline-block;
          font-weight: bold;
          font-size: 16px;
          outline: 0;
          padding: 12px 24px;
        }
        button:hover {
          background: #7694f5;
          color: white;
        }
      `}</style>
    </form>
  );
};

export default withUpdateTask<ExposedProps, UpdateTaskMutationProps>({props: ({ mutate }) => ({ updateTask: mutate })})(UpdateTaskForm);



// Argument of type '{ props: ({ mutate }: OptionProps<ExposedProps, { __typename?: "Mutation" | undefined; } & { updateTask: Maybe<{ __typename?: "Task" | undefined; } & Pick<Task, "id" | "title" | "status">>; }, UpdateTaskMutationVariables>) => { ...; }; }' is not assignable to parameter of type 'OperationOption<ExposedProps, { __typename?: "Mutation" | undefined; } & { updateTask: Maybe<{ __typename?: "Task" | undefined; } & Pick<Task, "id" | "title" | "status">>; }, UpdateTaskMutationVariables, UpdateTaskProps<...>>'.
  // Types of property 'props' are incompatible.
    // Type '({ mutate }: OptionProps<ExposedProps, { __typename?: "Mutation" | undefined; } & { updateTask: Maybe<{ __typename?: "Task" | undefined; } & Pick<Task, "id" | "title" | "status">>; }, UpdateTaskMutationVariables>) => { ...; }' is not assignable to type '(props: OptionProps<ExposedProps, { __typename?: "Mutation" | undefined; } & { updateTask: Maybe<{ __typename?: "Task" | undefined; } & Pick<Task, "id" | "title" | "status">>; }, UpdateTaskMutationVariables>, lastProps?: void | ... 1 more ... | undefined) => UpdateTaskProps<...>'.
      // Type '{ updateTask: MutationFunction<{ __typename?: "Mutation" | undefined; } & { updateTask: Maybe<{ __typename?: "Task" | undefined; } & Pick<Task, "id" | "title" | "status">>; }, UpdateTaskMutationVariables> | undefined; }' is not assignable to type 'UpdateTaskProps<UpdateTaskMutationProps>'.
        // Type '{ updateTask: MutationFunction<{ __typename?: "Mutation" | undefined; } & { updateTask: Maybe<{ __typename?: "Task" | undefined; } & Pick<Task, "id" | "title" | "status">>; }, UpdateTaskMutationVariables> | undefined; }' is missing the following properties from type 'MutateProps<{ __typename?: "Mutation" | undefined; } & { updateTask: Maybe<{ __typename?: "Task" | undefined; } & Pick<Task, "id" | "title" | "status">>; }, UpdateTaskMutationVariables>': mutate, resultts(2345)