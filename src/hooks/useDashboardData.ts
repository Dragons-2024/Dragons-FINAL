import { useState, useEffect } from "react";
import { getClientes } from "../services/ClienteServices";
import { getOpportunities } from "../services/OpportunityServices";

import { Client } from "../core/interface/client";
import { Oportunidad } from "../core/interface/opportunity";

export const useDashboardData = () => {
  const [clientes, setClientes] = useState<Client[]>([]);
  const [oportunidades, setOportunidades] = useState<Oportunidad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientesData = await getClientes();
        const oportunidadesData = await getOpportunities();
        setClientes(clientesData);
        setOportunidades(oportunidadesData);
      } catch (err) {
        console.error(err);

        setError("Error loading data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const clientesGraphData = clientes.map((cliente) => {
    const oportunidadesCliente = oportunidades.filter(
      (op) => op.cliente === cliente.nombre
    );

    const valorEjecutado = oportunidadesCliente.reduce(
      (sum, op) =>
        op.estadoOportunidad === "Cerrado" ? sum + op.valorEstimado : sum,
      0
    );

    const valorEstimado = oportunidadesCliente.reduce(
      (sum, op) =>
        op.estadoOportunidad !== "Cerrado" ? sum + op.valorEstimado + valorEjecutado : sum,
      0
    );

    return {
      cliente: cliente.nombre,
      valorEstimado,
      valorEjecutado,
    };
  });

  const estadoOportunidades = oportunidades.reduce(
    (acc: { [key: string]: number }, op) => {
      acc[op.estadoOportunidad] = (acc[op.estadoOportunidad] || 0) + 1;
      return acc;
    },
    {}
  );
  const estadoOportunidadesData = {
    labels: Object.keys(estadoOportunidades),
    values: Object.values(estadoOportunidades),
  };

  const lineasDeNegocio = oportunidades.reduce(
    (acc: { [key: string]: number }, op) => {
      acc[op.lineaNegocio] = (acc[op.lineaNegocio] || 0) + 1;
      return acc;
    },
    {}
  );
  const lineasDeNegocioData = {
    labels: Object.keys(lineasDeNegocio), 
    values: Object.values(lineasDeNegocio),
  };

  return {
    clientesGraphData,
    estadoOportunidadesData,
    lineasDeNegocioData,  
    loading,
    error,
  };
};
