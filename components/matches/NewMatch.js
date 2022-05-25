import { React, useContext, useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useFormik } from 'formik';
import { Dialog } from '@headlessui/react'
import { PlusCircleIcon } from '@heroicons/react/outline';

import Modal from '../../components/general/Modal';
import { NotificationContext } from '../../components/notifications/NotificationContext';

import fetcher from '../../lib/fetcher';
import validate from './validate';
import VenueField from '../form/VenueField';
import CourtField from '../form/CourtField';
import GamesField from '../form/GamesField';
import SetFieldLabel from '../form/SetFieldLabel';
import PlayerField from '../form/PlayerField';
import DateField from '../form/DateField';
import ModalButton from '../general/ModalButton';


export default function NewMatch({ open, setOpen, mutate, venues }) {
  // Notifications context to send notifications to the user.
  const notifications = useContext(NotificationContext);

  // Courts and ready state.
  const [courts, setCourts] = useState([]);
  const [ready, setReady] = useState(false);

  // useSWR hook for fetching players data.
  const { data: players, error } = useSWR('/api/players', fetcher)

  const formik = useFormik({
    initialValues: {
      player1: players ? players[0].email : '',
      player2: players ? players[0].email : '', 
      datePlayed: '',
      venue: venues ? venues[0].name : '',
      courtNumber: '',
      set1P1Games: 0,
      set1P2Games: 0,
      set2P1Games: 0,
      set2P2Games: 0,
      set3P1Games: '',
      set3P2Games: ''
    },
    validate,
    onSubmit: values => {
      fetch('/api/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      .then((res) => {
        if (res.status == 200) {
          notifications.setIsError(false);
          notifications.setMessage("A new match was successfully created.");
          notifications.setShow(true);
          setTimeout(function() { notifications.setShow(false) }, 3000)
          mutate('/api/matches/' + values.venue)
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

  // Once loaded,set ready to true to trigger below useEffect to query courts for default venue (i.e. first in list.)
  useEffect(() => {
    if (open && venues) {
      formik.values.venue = venues[0].name;
    }
    setReady(true);
  }, [open])

  useEffect(() => {
    formik.values.player1 = players ? players[0].email : null;
    formik.values.player2 = players ? players[0].email : null;
  }, [players])

  // Update courts when venue changes. 
  useEffect(() => {
    fetch('/api/courts/' + formik.values.venue, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          setCourts(data);
          formik.values.courtNumber = data ? data[0].court_number: 0;
        })
      } else {
          notifications.setIsError(true);
          notifications.setMessage("Couldn't load courts");
          notifications.setShow(true);
          setTimeout(function() { notifications.setShow(false) }, 1000)
      }
    })
  }, [ready, venues, formik.values.venue])

  return (
    // Modified from modal example at: https://tailwindui.com/components/application-ui/overlays/modals 
    <Modal open={open} setOpen={setOpen} >
      <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
        <div>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <PlusCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
              Create New Match
            </Dialog.Title>
            <div className="mt-2">
              <form onSubmit={formik.handleSubmit}>
                <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-2 appearance-none b-2">
                  
                  {/* Venue field - takes advantage of the fact that we've already preloaded the venues.*/}
                  <VenueField value={formik.values.venue} onChange={formik.handleChange} venues={venues} error={formik.errors.venue} />

                  {/* Court field */}
                  <CourtField value={formik.values.courtNumber} onChange={formik.handleChange} courts={courts} error={formik.errors.courtNumber} />

                  {/* Date played field */}
                  <DateField value={formik.values.datePlayed} id={"datePlayed"} onChange={formik.handleChange} error={formik.errors.datePlayed} label={"Date Played"} />

                  {/* Player 1 Field */}
                  <PlayerField number={1} id={"player1"} value={formik.values.player1} onChange={formik.handleChange} players={players} error={formik.errors.player1} />     

                  {/* Player 2 Field */}
                  <PlayerField number={2} id={"player2"} value={formik.values.player2} onChange={formik.handleChange} players={players} error={formik.errors.player2} />     
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-x-2 appearance-none">    
                  {/* Set 1 Scores */}
                  <SetFieldLabel number={1} optional={false} />
                  <GamesField player={"Player 1"} id={"set1P1Games"} value={formik.values.set1P1Games} onChange={formik.handleChange} error={formik.errors.set1P1Games} />
                  <GamesField player={"Player 2"} id={"set1P2Games"} value={formik.values.set1P2Games} onChange={formik.handleChange} error={formik.errors.set1P2Games} />

                  {/* Set 2 Scores */}
                  <SetFieldLabel number={2} optional={false} />
                  <GamesField player={"Player 1"} id={"set2P1Games"} value={formik.values.set2P1Games} onChange={formik.handleChange} error={formik.errors.set2P1Games} />
                  <GamesField player={"Player 2"} id={"set2P2Games"} value={formik.values.set2P2Games} onChange={formik.handleChange} error={formik.errors.set2P2Games} />

                  {/* Set 3 Scores */}
                  <SetFieldLabel number={3} optional={true} />
                  <GamesField optional={true} player={"Player 1"} id={"set3P1Games"} value={formik.values.set3P1Games} onChange={formik.handleChange} error={formik.errors.set3P1Games} />
                  <GamesField optional={true} player={"Player 2"} id={"set3P2Games"} value={formik.values.set3P2Games} onChange={formik.handleChange} error={formik.errors.set3P2Games} />
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