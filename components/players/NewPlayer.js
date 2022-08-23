import { React, useContext, useState } from 'react';
import { UserIcon } from '@heroicons/react/outline'
import { Dialog } from '@headlessui/react'
import { useFormik } from 'formik'

import validate from './validate';

import Modal from '../general/Modal';
import ModalButton from '../general/ModalButton';
import { NotificationContext } from '../notifications/NotificationContext';

import DateField from '../form/DateField';
import TextField from '../form/TextField';
import PhoneTypeField from '../form/PhoneTypeField';
import Toggle from '../form/Toggle';

/**
 * NewPlayer modal. Allows user to create a new player in the database. Uses Formik to manage forms validation.
 */
export default function NewPlayer({ open, setOpen, mutate }) {
  const [additional, setAdditional] = useState(false)

  // Notifications Context hook, used to trigger notifications
  const notifications = useContext(NotificationContext);

  // useFormik hook to provide form validation.
  const formik = useFormik({
    initialValues: {
      firstName: null,
      middleNames: null,
      lastName: null,
      email: null,
      dob: null,
      phone1: null,
      phoneType1: "Mobile",
      phone2: null,
      phoneType2: "Mobile",
      phone3: null,
      phoneType3: "Mobile"
    },
    validate,
    onSubmit: values => {
      fetch('/api/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      .then((res) => {
        if (res.status == 200) {
          notifications.setIsError(false);
          notifications.setMessage("A new user was successfully created.");
          notifications.setShow(true);
          setTimeout(function() { notifications.setShow(false) }, 3000)
          mutate('/api/players')
          setTimeout(function() { setOpen(false) }, 1000)
        } else {
          res.json().then((data) => {
            notifications.setIsError(true);
            notifications.setMessage(data.message);
            notifications.setShow(true);
            setTimeout(function() { notifications.setShow(false) }, 3000)
          })
        }
      })

    },
  })

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
        <div>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <UserIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
              Create New Player
            </Dialog.Title>
            <div className="mt-2">
              <form onSubmit={formik.handleSubmit}>
                <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-4  appearance-none">

                  {/* First name field */}
                  <TextField
                    span="col-span-1"
                    label="First Name"
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.errors.firstName}
                  />

                  {/* Middle name field */}
                  <TextField
                    span="col-span-1"
                    label="Middle Name(s)"
                    id="middleNames"
                    type="text"
                    autoComplete="additional-name"
                    value={formik.values.middleNames}
                    onChange={formik.handleChange}
                    error={formik.errors.middleNames}
                  />

                  {/* Last Name field */}
                  <TextField
                    span="col-span-1"
                    label="Last Name"
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.errors.lastName}
                  />

                  {/* Email field */}
                  <TextField
                    span="col-span-1 sm:col-span-2"
                    label="Email"
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                  />

                  {/* Date played field */}
                  <DateField value={formik.values.dob} id={"dob"} onChange={formik.handleChange} error={formik.errors.dob} label={"Date of Birth"} bday={true} />

                  {/* Phone number field*/}
                  <TextField
                    span="col-span-1 sm:col-span-2"
                    label="Phone Number"
                    id="phone1"
                    type="tel"
                    autoComplete="tel"
                    value={formik.values.phone1}
                    onChange={formik.handleChange}
                    error={formik.errors.phone1}
                  />

                  <PhoneTypeField id="phoneType" value={formik.values.phoneType1} error={formik.errors.phoneType1} onChange={formik.handleChange} />

                  <Toggle enabled={additional} setEnabled={setAdditional} />

                  {additional && <>
                    {/* Phone number field*/}
                    <TextField
                      span="col-span-1 sm:col-span-2"
                      label="Phone Number"
                      id="phone2"
                      type="tel"
                      autoComplete="tel"
                      value={formik.values.phone2}
                      onChange={formik.handleChange}
                      error={formik.errors.phone2}
                    />

                    <PhoneTypeField id="phoneType2" value={formik.values.phoneType2} error={formik.errors.phoneType2} onChange={formik.handleChange}/>
                    
                    {/* Phone number field*/}
                    <TextField
                      span="col-span-1 sm:col-span-2"
                      label="Phone Number"
                      id="phone3"
                      type="tel"
                      autoComplete="tel"
                      value={formik.values.phone3}
                      onChange={formik.handleChange}
                      error={formik.errors.phone3}
                    />

                    <PhoneTypeField id="phoneType3" value={formik.values.phoneType3} error={formik.errors.phoneType3} onChange={formik.handleChange}/>
                  </>}

                </div>

                <ModalButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}