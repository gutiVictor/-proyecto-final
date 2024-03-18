import React, { useState } from "react";
// Icons
import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";

const Profile = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      {/* Profile */}
      <div className="p-8 mb-8 bg-secondary-100 rounded-xl">
        <h1 className="text-xl text-gray-100">Profile</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p>Avatar</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
                <img
                  src="https://images.vexels.com/media/users/3/157512/isolated/preview/d737a872708b488d89d0341ac9b8bc5a-personas-contacto-icono-personas.png"
                  className="object-cover rounded-lg w-28 h-28"
                />
                <label
                  htmlFor="avatar"
                  className="absolute p-2 rounded-full bg-secondary-100 hover:cursor-pointer -top-2 left-24"
                >
                  <RiEdit2Line />
                </label>
                <input type="file" id="avatar" className="hidden" />
              </div>
              <p className="text-sm text-gray-500">
                Allowed file types: png, jpg, jpeg.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 gap-y-2 md:flex-row md:items-center">
            <div className="w-full md:w-1/4">
              <p>
                Nombre completo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex items-center flex-1 gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg outline-none bg-secondary-900"
                  placeholder="Nombre(s)"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg outline-none bg-secondary-900"
                  placeholder="Apellido(s)"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-8 md:flex-row md:items-center gap-y-2">
            <div className="w-full md:w-1/4">
              <p>
                Nombre de la empresa <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg outline-none bg-secondary-900"
                placeholder="Nombre(s)"
              />
            </div>
          </div>
          <div className="flex flex-col mb-8 md:flex-row md:items-center gap-y-2">
            <div className="w-full md:w-1/4">
              <p>
                Número de contacto <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg outline-none bg-secondary-900"
                placeholder="Nombre(s)"
              />
            </div>
          </div>
          <div className="flex flex-col mb-8 md:flex-row md:items-center gap-y-2">
            <div className="w-full md:w-1/4">
              <p>
                Página web <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg outline-none bg-secondary-900"
                placeholder="Nombre(s)"
              />
            </div>
          </div>
          <div className="flex flex-col mb-8 md:flex-row md:items-center gap-y-2">
            <div className="w-full md:w-1/4">
              <p>
                País <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full px-4 py-2 rounded-lg outline-none appearance-none bg-secondary-900">
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
                <option value="México">México</option>
                <option value="Perú">Perú</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mb-8 md:flex-row md:items-center gap-y-2">
            <div className="w-full md:w-1/4">
              <p>
                Ciudad <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full px-4 py-2 rounded-lg outline-none appearance-none bg-secondary-900">
                <option value="Barquisiméto">Barquisiméto</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Buga">Buga</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Lima">Lima</option>
                <option value="Montevideo">Montevideo</option>
                <option value="Caracas">Caracas</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="px-4 py-2 text-black transition-colors rounded-lg bg-primary/80 hover:bg-primary">
            Guardar
          </button>
        </div>
      </div>
      {/* Change password */}
      <div className="p-8 mb-8 bg-secondary-100 rounded-xl">
        <h1 className="text-xl text-gray-100">Usuario y contraseña</h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex flex-col justify-between md:flex-row md:items-center gap-y-4">
            <div>
              <h5 className="mb-1 text-xl text-gray-100">Correo electrónico</h5>
              <p className="text-sm text-gray-500">jorgetrejo@gmail.com</p>
            </div>
            <div>
              <button className="w-full px-4 py-3 transition-colors rounded-lg md:w-auto bg-secondary-900/50 hover:bg-secondary-900 hover:text-gray-100">
                Cambiar email
              </button>
            </div>
          </div>
          <hr className="my-8 border-dashed border-gray-500/30" />
          <div className="flex flex-col justify-between md:flex-row md:items-center gap-y-4">
            <div>
              <h5 className="mb-1 text-xl text-gray-100">Contraseña</h5>
              <p className="text-sm text-gray-500">****************</p>
            </div>
            <div>
              <button className="w-full px-4 py-3 transition-colors rounded-lg md:auto bg-secondary-900/50 hover:bg-secondary-900 hover:text-gray-100">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </form>
        <div className="grid items-center grid-cols-1 p-4 border border-green-600 border-dashed rounded-lg md:grid-cols-8 gap-y-4 bg-green-600/10">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="md:col-span-6">
            <h5 className="mb-2 text-xl text-gray-100">Asegura tu cuenta</h5>
            <p className="text-gray-500">
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in addition you'll need to provide a 6 digit
              code
            </p>
          </div>
          <div className="flex justify-center">
            <button className="px-4 py-2 text-gray-100 transition-colors rounded-lg bg-green-600/70 hover:bg-green-600">
              Activar
            </button>
          </div>
        </div>
      </div>
      {/* Connected accounts */}
      <div className="p-8 mb-8 bg-secondary-100 rounded-xl">
        <h1 className="text-xl text-gray-100">Conectar con cuentas</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col items-center gap-4 p-4 mb-8 border border-green-600 border-dashed rounded-lg md:flex-row bg-green-600/10">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-500">
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in you'll need to provide a 4 digit amazing
              code.{" "}
              <Link to="/" className="text-green-400">
                Learn More
              </Link>
            </p>
          </div>
        </div>
        <form className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                className="object-cover w-8 h-8"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Google</h5>
                <p className="text-sm text-gray-500">
                  Plan properly your workflow
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-dashed border-gray-500/30" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="object-cover w-8 h-8"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">GitHub</h5>
                <p className="text-sm text-gray-500">
                  Keep eye on on your Repositories
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-dashed border-gray-500/30" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
                className="object-cover w-8 h-8"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Slack</h5>
                <p className="text-sm text-gray-500">
                  Integrate Projects Discussions
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-dashed border-gray-500/30" />
        </form>
      </div>
      {/* Email preferences */}
      <div className="p-8 mb-8 bg-secondary-100 rounded-xl">
        <h1 className="text-xl text-gray-100">
          Notificaciones por correo electrónico
        </h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex items-center gap-4">
            <input type="checkbox" className="accent-primary" id="id1" />
            <div className="flex flex-col gap-y-1">
              <label htmlFor="id1" className="text-gray-100">
                Successful Payments
              </label>
              <p className="text-sm text-gray-500">
                Receive a notification for every successful payment.
              </p>
            </div>
          </div>
          <hr className="my-8 border-dashed border-gray-500/30" />
          <div className="flex items-center gap-4">
            <input type="checkbox" className="accent-primary" id="id2" />
            <div className="flex flex-col gap-y-1">
              <label htmlFor="id2" className="text-gray-100">
                Payouts
              </label>
              <p className="text-sm text-gray-500">
                Receive a notification for every initiated payout.
              </p>
            </div>
          </div>
          <hr className="my-8 border-dashed border-gray-500/30" />
          <div className="flex items-center gap-4">
            <input type="checkbox" className="accent-primary" id="id3" />
            <div className="flex flex-col gap-y-1">
              <label htmlFor="id3" className="text-gray-100">
                Customer Payment Dispute
              </label>
              <p className="text-sm text-gray-500">
                Receive a notification if a payment is disputed by a customer
                and for dispute purposes.
              </p>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="px-4 py-2 text-black transition-colors rounded-lg bg-primary/80 hover:bg-primary">
            Guardar
          </button>
        </div>
      </div>
      {/* Inactive account */}
      <div className="p-8 mb-8 bg-secondary-100 rounded-xl">
        <h1 className="text-xl text-gray-100">Desactivar cuenta</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col items-center gap-4 p-4 mb-8 border border-yellow-600 border-dashed rounded-lg md:flex-row bg-yellow-600/10">
          <div className="flex justify-center">
            <RiErrorWarningLine className="text-5xl text-yellow-600" />
          </div>
          <div className="flex-1">
            <h5 className="mb-2 text-xl text-gray-100">
              You Are Deactivating Your Account
            </h5>
            <p className="text-gray-500">
              For extra security, this requires you to confirm your email or
              phone number when you reset yousignr password.{" "}
              <Link className="text-blue-500">Learn more</Link>
            </p>
          </div>
        </div>
        <form className="flex items-center gap-4">
          <input type="checkbox" className="accent-primary" id="idInactive" />
          <label htmlFor="idInactive" className="text-gray-500">
            I confirm my account deactivation
          </label>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="px-4 py-2 text-gray-100 transition-colors rounded-lg bg-red-500/80 hover:bg-red-500">
            Desactivate account
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;