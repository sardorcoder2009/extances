
import { FieldValues, useForm } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
  Cat: string;
}

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitFunction = (data: FieldValues) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(submitFunction)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Description:
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
          id="name"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">
            Description must be at least 3 characters.
          </p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            Description must be at least 3 characters.
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Amount:
        </label>
        <input
          {...register("age", { required: true, min: 20 })}
          type="number"
          className="form-control"
          id="age"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">Amount is required.</p>
        )}
        {errors.age?.type === "min" && <p className="text-danger"></p>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <select id="category" className="form-select" aria-label="Default select example"
        {...register("Cat", { required: true, min: 1 })}
        
        id="category">
          <option selected className={"d-none"}></option>
          <option value="1">All one</option>
          <option value="2">The two</option>
          <option value="3">The All</option>
        </select>
     
        {errors.Cat?.type === "required" && (
          <p className="text-danger">Category is required.</p>
        )}
        {errors.Cat?.type === "min" && <p className="text-danger"></p>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
