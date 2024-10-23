const { ApolloServer, AuthenticationError } = require('apollo-server');
const axios = require('axios');

const typeDefs = `
  type Query {
    servicejuan: String
    servicesebastian: [String]
    servicemanuel: [String]
    serviceyissi: [String]
    servicemateo: [String]
    servicehassen: [String]
    servicemarcela: [String]
    serviceinvitado: [String]
  }
`;

const resolvers = {

  Query: {
    servicejuan: async () => {
      try {
        const response = await axios.get('http://serviciojuanrodriguez:8095/hotel');
        return response.data; // Devuelve la cadena de texto simplificada directamente
      } catch (err) {
        console.error("Error al obtener los datos del hotel:", err);
        return "Error al obtener los datos del hotel.";
      }
    },
    servicesebastian: async (parent, args, context, info) => {
      console.log(context.token);
      try {
          const response = await axios.get('http://serviciosebastian:6231/eventos');
          const data = response.data;
          return [...data.hotel, ...data.conciertos, ...data.obras, ...data.torneos];
      } catch (err) {
          console.error("Error al obtener datos de servicio sebastian", err);
          return [];
      }
    },
    servicemanuel: () => "servicio de manuel",
    serviceyissi: () => "servicio de yissi",
    servicemateo: async (parent, args, context, info) => {
        console.log(context.token);
        try {
            const response = await axios.get('http://servicemateo:9090/hotel');
            const data = response.data;
            return [...data.nombre, ...data.ubicacion, ...data.habitaciones, ...data.estrellas, ...data.precios, ...data.servicios];
        } catch (err) {
            console.error("Error al obtener datos de servicemateo", err);
            return [];
        }
    },
    servicehassen: () => "servicio de hassen",
    servicemarcela: () => "servicio de marcela",
    serviceinvitado: () => "Hola, el servicio que cualquier invitado puede implementar",
  },
};

async function getContext({ req }) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.split('Bearer ')[1];

  try {
    const response = await axios.post('http://authservice:3000/verify-token', { token: token });
    console.log(response.data)
    if (response.data && response.data.isValid) {
      return { token };
    } else {
      throw new AuthenticationError("No estás autorizado");
    }
  } catch (err) {
    throw new AuthenticationError("Error al validar el token");
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: getContext
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

