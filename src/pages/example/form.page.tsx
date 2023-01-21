import Button from '@/components/buttons/Button';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import Layout from '@/layouts/Layout';

export default function FormExample() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data);

  type FormValues = {
    name: string;
    email: string;
  };
  return (
    <Layout>
      <main>
        <section className='layout'>
          <h1 className='text-3xl font-bold underline'>Example Of Form</h1>
          <Form<FormValues> onSubmit={onSubmit} className='w-96'>
            {() => (
              <>
                <Input
                  id='name'
                  label='Nama'
                  placeholder='Masukkan nama'
                  validate={{
                    required: 'Nama harus diisi',
                  }}
                />
                <Button type='submit'>Kirim</Button>
              </>
            )}
          </Form>
        </section>
      </main>
    </Layout>
  );
}
