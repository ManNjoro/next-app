import React from 'react';

interface Props {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ sortOrder?: string }>;
}

const ProductPage = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const { sortOrder } = await searchParams;

  return (
    <div>
      ProductPage: {slug?.join('/') ?? 'Home'} | Sort Order: {sortOrder ?? 'default'}
    </div>
  );
};

export default ProductPage;
