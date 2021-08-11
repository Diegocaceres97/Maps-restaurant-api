import axios from 'axios';
const   url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': '9dfc3a36bbmsheb23a29e094b931p134878jsnc958c3caf44d',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPlacesData;