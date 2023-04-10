import { ChangeEvent, useState } from 'react';
import Head from 'next/head';

const convert = (text: string) => {
  return text.replace(/(\r\n|\r|\n)/g, '\\n');
};

export default function Home() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const outputText = convert(inputText);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form>
          <label>
            Input Text:
            <textarea
              cols={100}
              rows={30}
              value={inputText}
              onChange={handleInputChange}
            />
          </label>
        </form>
        <form>
          <label>
            Output Text:
            <textarea cols={100} rows={30} readOnly value={outputText} />
          </label>
        </form>
      </main>
    </>
  );
}