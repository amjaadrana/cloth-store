import { useForm } from "react-hook-form"

type Inputs = {
    email: string
    password: string
}


const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit = (data: Inputs) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <input
                type="password"
                placeholder="password"
                {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
            <input type="submit" />
        </form>
    )
}