
/**
 * Make an HTTP request.
 *
 * @param {string} url Request URL.
 * @param {Object} [body = null] Object contains request data.
 * @param {string} [method = "GET"] Request method.
 * @param {Object} [headers = {}] Object contains request headers.
 *
 * @return Promise fulfilled with response data.
 */
const get = async (url, data = null, method = 'GET', headers = {}) => {
  const response = await fetch(url, {
    body: data ? JSON.stringify(data) : data,
    headers,
    method,
  });

  const results = await response.json();
  return results;
};
export default get;

