import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const handleSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      reset({
        name: '',
      });
    }
  };

  return (
    <form
      target="_blank"
      onSubmit={handleSubmit}
      action="https://formsubmit.co/6f01293b1e333879f6ee06eceba5fa1d"
      method="POST"
    >
      <input
        className={inputStyles}
        type="text"
        placeholder="Your name"
        {...register('name', {
          required: true,
          maxLength: 100,
        })}
      />
      {errors.name && (
        <p className="mt-1 text-primary-500">
          {errors.name.type === 'required' && 'This field is required.'}
          {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
        </p>
      )}

      <input
        className={inputStyles}
        type="text"
        placeholder="Your email"
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email && (
        <p className="mt-1 text-primary-500">
          {errors.email.type === 'required' && 'This field is required.'}
          {errors.email.type === 'pattern' && 'Invalid email address.'}
        </p>
      )}

      <textarea
        className={inputStyles}
        placeholder="Your message"
        rows={4}
        cols={50}
        {...register('message', {
          required: true,
          maxLength: 2000,
        })}
      />
      {errors.message && (
        <p className="mt-1 text-primary-500">
          {errors.message.type === 'required' && 'This field is required.'}
          {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
