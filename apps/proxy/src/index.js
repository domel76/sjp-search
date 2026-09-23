export default {
  async fetch(request) {
    const sjpUrl = 'https://sjp.pl/sl/odmiany/sjp-odm-20260901.zip';

    const response = await fetch(sjpUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });

    const newHeaders = new Headers(response.headers);
    newHeaders.set('Access-Control-Allow-Origin', '*');
    newHeaders.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
};
