import EventForm from '@/components/shared/EventForm';
import { auth } from '@clerk/nextjs';

const UpdateEvent = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userID as string;
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-dover bg-center py-5 md:py-10'>
        <h3 className='wrapper h3-bold text-center sm:text-left'>Event</h3>
      </section>

      <div className='wrapper my-8'>
        <EventForm userId={userId} type='Update'></EventForm>
      </div>
    </>
  );
};

export default UpdateEvent;
