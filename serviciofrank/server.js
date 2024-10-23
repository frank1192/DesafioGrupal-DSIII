const { ApolloServer, AuthenticationError } = require('apollo-server');
const axios = require('axios'); 

const typeDefs = `
  type Query {
    servicejuan: [String]
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
        servicejuan: (parent, args, context, info) => {
          console.log(context.token);
          return "servicio de juan de get";
      },
      servicesebastian: () => "servicio de sebastian",
      servicemanuel: () => "servicio de manuel",
      serviceyissi: () => "servicio de yissi",
      servicemateo: () => "servicio de mateo!",
      servicehassen: () => "servicio de hassen",
      servicemarcela: () => "servicio de marcela!",
      serviceinvitado: () => "Hola, el servicio que cualquier invitado puede implementar",
    },
  };


  servicemarcela: async () => {
    try {
        const response = await axios.get('http://serviciomarcela-service:7000/mensajes');
        const data = response.data;
        return `Mensajes del servicio de Marcela: ${data.mensajes.join(', ')}`;
    } catch (err) {
        console.error("Error al obtener datos del servicio de Marcela", err);
        return "Error al obtener datos del servicio de Marcela";
    }
}

  
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

