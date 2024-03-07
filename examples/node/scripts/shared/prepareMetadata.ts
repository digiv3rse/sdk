import { textOnly } from '@digiv3rse/metadata';

import { uploadWithBundlr } from './uploadWithBundlr';

export async function prepareMetadata(content = 'Post created with DiGiClient SDK') {
  const metadata = textOnly({
    content,
  });

  const contentURI = await uploadWithBundlr(metadata);

  console.log(`Content URI: ${contentURI}`);

  return contentURI;
}
