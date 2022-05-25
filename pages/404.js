import { React } from 'react';
import Header from '../components/general/Header';
import Button from '../components/general/Button';
import { useRouter } from 'next/router';

/**
 * 404 Page.
 */
export default function Custom404() {
  const router = useRouter();

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8 mb-8">
      {/* Page title and button */}
      <div className="sm:flex sm:items-center">
        <Header title={"Oh no!"} description={"This page doesn't exist."} />
        <Button text={"Back"} onClick={() => router.back()}/>
      </div>
    </div>
  )
}