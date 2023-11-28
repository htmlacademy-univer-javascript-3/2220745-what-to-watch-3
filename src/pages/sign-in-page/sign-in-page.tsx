import Logo from '../../components/logo/logo.tsx';
import Footer from '../../components/footer/footer.tsx';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks.ts';
import { loginAction } from '../../redux/api-actions.ts';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

export type UserFormValues = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserFormValues>({
    email: '',
    password: '',
  });

  const validateEmail = (newFormData: UserFormValues) =>
    Boolean(newFormData.email.match(/[a-zA-Z0-9.]+@[a-zA-Z]+[.][a-zA-Z]{2,4}$/));

  const validatePassword = (newFormData: UserFormValues) =>
    Boolean(newFormData.password.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/));

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { name, value } = evt.target;

    setFormData(() => {
      const newFormData: UserFormValues = { ...formData, [name]: value };
      return newFormData;
    });
  };

  const handleSubmit: FormEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    if (!validateEmail(formData)) {
      toast.warn('Please enter a valid email address');
      return;
    }
    if (!validatePassword(formData)) {
      toast.warn('Please enter a valid password');
      return;
    }

    dispatch(loginAction(formData));
    navigate(AppRoute.Main);
  };

  return (
    <div className="user-page">
      <Helmet>
        <title>Вход</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
                onChange={handleFieldChange}
                required
                data-testid="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                onChange={handleFieldChange}
                required
                data-testid="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onSubmit={handleSubmit}
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
