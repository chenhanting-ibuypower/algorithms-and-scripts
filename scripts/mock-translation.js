// Microsoft 翻譯完轉換成 Sanity 的格式
const languageMicrosoftSanityMap = {
  es: "es",
  de: "de",
  fr: "fr",
  pl: "pl",
  it: "it",
  nl: "nl",
  ko: "ko",
  ja: "ja",
  "zh-Hant": "zhTW",
  "zh-Hans": "zhCN",
  pt: "pt",
};

const sanityLanguages = Object.values(languageMicrosoftSanityMap);

function retryAPI(apiCall, maxRetries, delay) {
  let retries = 0;

  function makeRequest() {
    return new Promise((resolve, reject) => {
      apiCall()
        .then((response) => {
          // Handle successful response
          console.log("API call succeeded:", response);
          resolve(response);
        })
        .catch((error) => {
          // Handle error
          console.error("API call failed:", error);

          if (retries < maxRetries) {
            retries++;
            console.log(
              `Retrying API call (${retries}/${maxRetries}) in ${delay}ms...`
            );
            setTimeout(makeRequest, delay);
          } else {
            console.error("Max retries reached. Unable to complete API call.");
            reject(new Error("Max retries reached"));
          }
        });
    });
  }

  return makeRequest();
}

// Usage 1:
// retryAPI(() => fetch("https://jsonplaceholder.typicode.com/todos/1"), 3, 1000);
// Usage 2:
// retryAPI(() => fetch("https://jsonplaceholder.typicode.com/todos/1"), 3, 1000);

async function translateOnebyOne() {
  let translatedContent = [];
  for (let i = 0; i < sanityLanguages.length; i++) {
    const language = sanityLanguages[i];
    const url = "https://hyte-support.azurewebsites.net/api/multi-translate";
    const options = {
      method: "POST",
      body: JSON.stringify({
        locale: language,
        content: [
          "Even though",
          "this can be marked as completed",
          "I still need to take it",
          "with",
          "a grain of salt",
          ".",
        ],
      }),
    };

    const apiCall = () =>
      fetch(url, options)
        .then(async (response) => {
          console.log({
            status: response.status,
            statusText: response.statusText,
            ok: response.ok,
          });
          if (!response.ok) {
            reject(new Error("Network response was not ok"));
            throw new Error("Network response was not ok");
          }

          const _j = await response.json();
          if (!Array.isArray(_j)) {
            reject(new Error("Response is not an array"));
            throw new Error("Response is not an array");
          }

          return _j;
        })
        .catch((error) => {
          console.error("Translation failed:", error);
        });

    const maxRetries = 3;
    const delay = 1000; // delay between retries

    const result = await retryAPI(apiCall, maxRetries, delay);

    Array.isArray(result) &&
      translatedContent.push({
        _key: language,
        locale: language,
        _type: "internationalString",
        content: result.join(" "),
      });

    console.log("Length of the translated content:", translatedContent.length);

    // Wait for 1 second before next iteration
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }

  return translatedContent;
}

async function translateAllAtOnce() {
  return await translateOnebyOne();
}

translateAllAtOnce();
