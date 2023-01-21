import SEO from '@/components/SEO';
import Layout from '@/layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <SEO title='Home' description='This is the home page' />
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </Layout>
  );
}
