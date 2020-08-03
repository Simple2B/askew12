export default class CodeApiService {

  _apiBase = `http://${window.location.hostname}:8000/api`;

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllSamples() {
    const allSamples = await this.getResource('/samples/');
    console.log(allSamples, typeof(allSamples));
    return allSamples;
  }

  async getCodeSampleById(id) {
    const sample = await this.getResource(`/samples/${id}`);
    return sample;
  }
}