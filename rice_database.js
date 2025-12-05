// BASE DE DATOS COMPLETA DEL RICE - Colegio de la Purísima Concepción
// Extraída del Reglamento Interno de Convivencia Escolar 2025

const RICE_DB = [
    // ==================== FALTAS LEVES ====================
    { 
        id: 'L1', 
        type: 'leve', 
        name: '1. Impuntualidad', 
        desc: 'Llegar tarde al inicio de la jornada o al inicio de horas de clase intermedia o actos institucionales.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de compromiso', 
        resp: 'Profesor asignatura / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'L2', 
        type: 'leve', 
        name: '2. Molestar en clase', 
        desc: 'Molestar, tirar papeles, dormir, maquillarse, o hacer otra cosa distinta que provoque interrupciones durante la hora de clases o actos institucionales.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de compromiso', 
        resp: 'Profesor asignatura / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'L3', 
        type: 'leve', 
        name: '3. No seguir instrucciones', 
        desc: 'Negarse a seguir las instrucciones pedagógicas y/o disciplinarias dictadas por el personal del colegio.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de compromiso\nd) Acta de sanción', 
        resp: 'Asistente de aula / Profesor asignatura / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'L4', 
        type: 'leve', 
        name: '4. Descuidar presentación personal', 
        desc: 'Descuidar la presentación e higiene personal.', 
        measures: 'a) Diálogo reflexivo\nb) Anotación negativa\nc) Citación apoderado\nd) Acta de compromiso', 
        resp: 'Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'L5', 
        type: 'leve', 
        name: '5. Comercialización sin autorización', 
        desc: 'Comprar o vender productos de cualquier naturaleza sin autorización de la Inspectoría General y/o de la Dirección.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de compromiso', 
        resp: 'Asistente de la educación / Profesor asignatura / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'L6', 
        type: 'leve', 
        name: '6. Uso de celular u otros equipos', 
        desc: 'Utilizar celulares u otros equipos tecnológicos que no corresponden a las actividades académicas. Los artículos serán entregados a los apoderados en Inspectoría General.', 
        measures: 'a) Diálogo reflexivo\nb) Acta de compromiso\nc) Retiro del dispositivo', 
        resp: 'Profesor asignatura / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'L7', 
        type: 'leve', 
        name: '7. Ingerir alimentos en clase', 
        desc: 'Ingerir cualquier tipo de alimentos o bebestible en horas de clase sin autorización del docente o Inspectoría General.', 
        measures: 'a) Amonestación verbal\nb) Diálogo reflexivo', 
        resp: 'Profesor asignatura' 
    },
    { 
        id: 'L8', 
        type: 'leve', 
        name: '8. Quitar elementos de juego', 
        desc: 'Quitar elementos de juego (juguetes, pelotas, etc.) o colaciones a las estudiantes de su mismo nivel u otro.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Restitución o reparación\nd) Acta de sanción', 
        resp: 'Docente / Directivo / Inspector General / Profesor Jefe' 
    },
    { 
        id: 'L9', 
        type: 'leve', 
        name: '9. Mojarse y/o lanzar agua', 
        desc: 'Mojarse y/o lanzar agua a estudiantes de su mismo nivel u otro.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Medida reparatoria\nd) Acta de compromiso', 
        resp: 'Orientador(a) / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'L10', 
        type: 'leve', 
        name: '10. Devolución tardía CRA', 
        desc: 'Devolver los materiales facilitados por el CRA (libros, diccionarios, mapas, etc.) fuera de plazo.', 
        measures: 'a) Diálogo reflexivo\nb) Acta de compromiso\nc) Acción de reparación', 
        resp: 'Encargado(a) biblioteca / Orientadora / Inspectoría General' 
    },
    { 
        id: 'L11', 
        type: 'leve', 
        name: '11. Falta de materiales', 
        desc: 'No presentarse con los materiales, textos escolares y guías necesarios para las actividades académicas.', 
        measures: 'a) Diálogo reflexivo', 
        resp: 'Profesor asignatura / Profesor Jefe' 
    },
    { 
        id: 'L12', 
        type: 'leve', 
        name: '12. Deambular por pasillos', 
        desc: 'Deambular por los pasillos del colegio durante los horarios de clase, sin la autorización correspondiente.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de compromiso', 
        resp: 'Inspectoría General / Profesor asignatura / Profesor Jefe' 
    },
    { 
        id: 'L13', 
        type: 'leve', 
        name: '13. Lenguaje grosero', 
        desc: 'Utilizar lenguaje grosero en el interior del establecimiento.', 
        measures: 'a) Diálogo reflexivo\nb) Acta de compromiso', 
        resp: 'Profesor asignatura / Profesor Jefe / Asistente de la educación / Inspectoría General' 
    },
    { 
        id: 'L14', 
        type: 'leve', 
        name: '14. Presentación personal inadecuada', 
        desc: 'Presentación personal no acorde con su calidad de estudiante (largo de la falda, uñas, pelo, maquillaje inadecuado, uso de accesorios no permitidos).', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de compromiso', 
        resp: 'Profesor asignatura / Profesor Jefe / Inspectoría General' 
    },

    // ==================== FALTAS GRAVES ====================
    { 
        id: 'G1', 
        type: 'grave', 
        name: '1. Agresión verbal a funcionario', 
        desc: 'Demostrar conductas agresivas hacia cualquier funcionario de la comunidad educativa, de forma directa o a través de redes sociales.', 
        measures: 'a) Citación apoderado\nb) Acción de reparación\nc) Plan de acompañamiento individual\nd) Retiro anticipado de jornada\ne) Acta de sanción/advertencia/condicionalidad\nf) Suspensión de representación pública\ng) Suspensión temporal (medida precautoria)', 
        resp: 'Profesor Jefe / Convivencia Escolar / Inspectoría General / Director(a)' 
    },
    { 
        id: 'G2', 
        type: 'grave', 
        name: '2. Testigo pasivo de acoso', 
        desc: 'Mantenerse como observador(a) en situaciones que constituyan actos de acoso escolar (testigo pasivo).', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de compromiso\nd) Plan de acompañamiento individual', 
        resp: 'Orientador(a) / Profesor Jefe / Convivencia Escolar / Inspectoría General' 
    },
    { 
        id: 'G3', 
        type: 'grave', 
        name: '3. Incumplir acuerdos organizacionales', 
        desc: 'Manifestar conductas contrarias a los acuerdos adoptados por sus propias organizaciones (directiva de curso o CELAP).', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de compromiso', 
        resp: 'Profesor Jefe / Orientador / Inspectoría General' 
    },
    { 
        id: 'G4', 
        type: 'grave', 
        name: '4. Lenguaje grosero reiterado', 
        desc: 'Expresarse reiteradamente de forma grosera en el interior del colegio o mientras se esté usando el uniforme.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de sanción', 
        resp: 'Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'G5', 
        type: 'grave', 
        name: '5. Daño a propiedad', 
        desc: 'Dañar o destruir la propiedad del colegio o de cualquier otra persona.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acción de reparación\nd) Servicio comunitario\ne) Acta de compromiso u otra según gravedad', 
        resp: 'Profesor Jefe / Inspectoría General / Convivencia Escolar' 
    },
    { 
        id: 'G6', 
        type: 'grave', 
        name: '6. Portar elementos peligrosos', 
        desc: 'Transportar, poseer, portar o utilizar elementos que puedan ser peligrosos para sí mismo o para la comunidad escolar.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de compromiso/sanción\nd) Aula segura (si afecta gravemente la convivencia)', 
        resp: 'Profesor Jefe / Inspectoría General / Director(a)' 
    },
    { 
        id: 'G7', 
        type: 'grave', 
        name: '7. Copiar o falsificar', 
        desc: 'Copiar durante una evaluación, falsificar firmas, notas, comunicaciones escolares, presentar justificativos falsos o suplantar identidad en evaluación.', 
        measures: 'a) Citación apoderado\nb) Trabajo académico\nc) Acta de sanción u otra según debido proceso', 
        resp: 'Inspectoría General / Coordinación de ciclo / Orientador(a)' 
    },
    { 
        id: 'G8', 
        type: 'grave', 
        name: '8. Hurtar evaluaciones', 
        desc: 'Hurtar evaluaciones, trabajos, pruebas, etc.', 
        measures: 'a) Citación apoderado\nb) Acta de sanción u otra según debido proceso', 
        resp: 'Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'G9', 
        type: 'grave', 
        name: '9. Plagio', 
        desc: 'Plagiar trabajos de investigación o informes desde cualquier fuente, ya sea de medios escritos o digitales.', 
        measures: 'a) Acta de sanción', 
        resp: 'Inspectoría General' 
    },
    { 
        id: 'G10', 
        type: 'grave', 
        name: '10. Fuga del establecimiento', 
        desc: 'Fugarse de las instalaciones del colegio.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de sanción u otra según debido proceso', 
        resp: 'Orientación / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'G11', 
        type: 'grave', 
        name: '11. Conducta que perjudique al colegio', 
        desc: 'Tener una conducta dentro o fuera del colegio que perjudique o atente contra el buen nombre de la institución (fumar en la calle, consumo de alcohol, publicación de fotos/videos inapropiados, peleas en lugares públicos).', 
        measures: 'a) Citación apoderado\nb) Diálogo reflexivo\nc) Acta de compromiso u otra según contexto y debido proceso', 
        resp: 'Profesor Jefe / Convivencia Escolar / Inspectoría General' 
    },
    { 
        id: 'G12', 
        type: 'grave', 
        name: '12. Faltar a evaluación sin justificación', 
        desc: 'Faltar a una evaluación fijada con anterioridad, sin certificación médica o explicación del apoderado.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado', 
        resp: 'Profesor Jefe' 
    },
    { 
        id: 'G13', 
        type: 'grave', 
        name: '13. Actitudes que atentan equilibrio emocional', 
        desc: 'Inventar rumores falsos, aislar socialmente, proferir mensajes ofensivos, letreros o gestos obscenos/vulgares, insultos, amenazas a través de redes sociales o en instalaciones del colegio.', 
        measures: 'a) Citación apoderado\nb) Resolución alternativa de conflicto\nc) Acción de reparación\nd) Acta de sanción u otra según contexto\nNOTA: No excluye denuncia si hay delito o vulneración de derechos', 
        resp: 'Profesor Jefe / Inspectoría General / Convivencia Escolar' 
    },
    { 
        id: 'G14', 
        type: 'grave', 
        name: '14. Deslealtad al colegio', 
        desc: 'Inducir, promover, participar en actos de deslealtad: inventar rumores, concertarse para no asistir a actos, participar en tomas u ocupaciones no autorizadas.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Plan de acompañamiento individual\nd) Eximición de licenciatura\ne) Acta de sanción u otra según contexto', 
        resp: 'Profesor Jefe / Convivencia Escolar / Inspectoría General' 
    },
    { 
        id: 'G15', 
        type: 'grave', 
        name: '15. Inducir o manipular', 
        desc: 'Inducir, manipular u obligar a otra persona a cometer acto que constituya infracción académica o disciplinaria, o que atente contra la moral, salud y buenas costumbres.', 
        measures: 'a) Acción de reparación\nb) Resolución alternativa de conflicto\nc) Plan de acompañamiento individual\nd) Citación apoderado\ne) Acta de sanción u otra según contexto', 
        resp: 'Convivencia Escolar / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'G16', 
        type: 'grave', 
        name: '16. Hurto menor', 
        desc: 'Atentar contra la propiedad privada ajena o hurtar cualquier especie cuyo valor no exceda la media UTM.', 
        measures: 'a) Citación apoderado\nb) Acción de reparación\nc) Restitución o reparación de bien\nd) Plan de acompañamiento individual\ne) Acta de sanción u otra según contexto', 
        resp: 'Profesor Jefe / Convivencia Escolar / Inspectoría General' 
    },
    { 
        id: 'G17', 
        type: 'grave', 
        name: '17. Comportamiento agresivo', 
        desc: 'Tener comportamientos, manifestaciones y/o conductas de carácter agresivo, explotador y/o amenazante contra la voluntad de otro compañero o funcionario.', 
        measures: 'a) Resolución alternativa de conflicto\nb) Diálogo reflexivo\nc) Acta de sanción u otra atendida la gravedad', 
        resp: 'Convivencia Escolar / Profesor asignatura / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'G18', 
        type: 'grave', 
        name: '18. Complicidad en actos deshonestos', 
        desc: 'Ser cómplice en actos deshonestos o que atenten contra la integridad física y/o psicológica de cualquier integrante de la comunidad educativa (excluido acoso escolar).', 
        measures: 'a) Diálogo reflexivo\nb) Acción de reparación\nc) Trabajo académico\nd) Citación apoderado\ne) Resolución alternativa de conflictos\nf) Plan de acompañamiento individual\ng) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Convivencia Escolar / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'G19', 
        type: 'grave', 
        name: '19. Presentarse bajo efectos de alcohol/drogas', 
        desc: 'No presentarse en las condiciones requeridas para algún evento institucional (bajo los efectos del alcohol y/o drogas).', 
        measures: 'a) Diálogo reflexivo\nb) Anotación negativa\nc) Citación apoderado\nd) Retiro anticipado de jornada\ne) Acta de sanción u otra según contexto', 
        resp: 'Convivencia Escolar / Profesor asignatura / Inspectoría General / Profesor Jefe' 
    },
    { 
        id: 'G20', 
        type: 'grave', 
        name: '20. Expresiones afectivas íntimas', 
        desc: 'Demostrar expresiones afectivas íntimas en el establecimiento (besarse en la boca, abrazos desmedidos, actos de connotación erótica, reunirse en sectores aislados).', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Retiro anticipado de jornada\nd) Plan de acompañamiento individual\ne) Acta de compromiso u otra según contexto', 
        resp: 'Orientación / Profesor Jefe / Inspectoría General / Convivencia Escolar' 
    },
    { 
        id: 'G21', 
        type: 'grave', 
        name: '21. Poseer o consumir sustancias', 
        desc: 'Poseer o consumir bebidas alcohólicas, cigarrillos, fármacos no indicados por médico, al presentarse al colegio, dentro de él o en actividad patrocinada por él.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Plan de acompañamiento individual\nd) Retiro anticipado de jornada\ne) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Profesor Jefe / Convivencia Escolar / Inspectoría General' 
    },
    { 
        id: 'G22', 
        type: 'grave', 
        name: '22. Ausentarse a horas intermedias', 
        desc: 'Ausentarse a horas intermedias de clases estando en el colegio.', 
        measures: 'a) Diálogo reflexivo\nb) Acta de compromiso', 
        resp: 'Profesor asignatura / Inspectoría General' 
    },
    { 
        id: 'G23', 
        type: 'grave', 
        name: '23. Tomar fotos/videos sin autorización', 
        desc: 'Tomar fotos y/o grabar videos con fines denostadores de otros estudiantes, profesores, asistentes, apoderados, directivos sin autorización de los involucrados.', 
        measures: 'a) Citación apoderado\nb) Suspensión de representación pública\nc) Eximición de licenciatura\nd) Acta de sanción u otra según contexto', 
        resp: 'Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'G24', 
        type: 'grave', 
        name: '24. Desacato en restitución', 
        desc: 'Quedar en condición de desacato frente a la restitución o reparación de un bien (plazo de 10 días hábiles).', 
        measures: 'a) Citación apoderado\nb) Acta de compromiso', 
        resp: 'Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'G25', 
        type: 'grave', 
        name: '25. Lanzar líquidos o comida', 
        desc: 'Lanzar líquido (bebidas, jugos, etc), comida a estudiantes de su mismo nivel u otro.', 
        measures: 'a) Diálogo reflexivo\nb) Acción de reparación\nc) Citación apoderado\nd) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Convivencia Escolar / Profesor Jefe / Inspectoría General' 
    },

    // ==================== FALTAS GRAVÍSIMAS ====================
    { 
        id: 'S1', 
        type: 'gravisima', 
        name: '1. Reincidencia bajo efectos de alcohol/drogas', 
        desc: 'Presentarse al colegio en más de una ocasión bajo los efectos del alcohol, de las drogas o de sustancias psicotrópicas.', 
        measures: 'a) Retiro anticipado de jornada\nb) Plan acompañamiento individual\nc) Plan de acompañamiento estudiante y familia (PAEF)\nd) Acta de sanción u otra según contexto y debido proceso', 
        resp: 'Inspectoría General / Convivencia Escolar' 
    },
    { 
        id: 'S2', 
        type: 'gravisima', 
        name: '2. Consumo, posesión o comercio de drogas/alcohol', 
        desc: 'Consumir, poseer, suministrar, inducir al consumo o comerciar bebidas alcohólicas, cigarrillos, cannabis, fármacos no indicados o cualquier sustancia que produzca dependencia.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Trabajo académico\nd) Plan acompañamiento individual\ne) Acta de sanción u otra según contexto y debido proceso', 
        resp: 'Orientación / Inspectoría General / Convivencia Escolar' 
    },
    { 
        id: 'S3', 
        type: 'gravisima', 
        name: '3. Incitar a cometer delito', 
        desc: 'Incitar a otros estudiantes del colegio a cometer conductas que constituyan delito.', 
        measures: 'a) Diálogo reflexivo\nb) Plan acompañamiento individual\nc) Citación apoderado\nd) Suspensión de representación pública\ne) Eximición de licenciatura\nf) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Inspectoría General' 
    },
    { 
        id: 'S4', 
        type: 'gravisima', 
        name: '4. Testimonio falso en investigación', 
        desc: 'Entregar testimonio falso en proceso investigativo con la intención de ocultar información y/o proteger a personas de materia investigada.', 
        measures: 'a) Diálogo reflexivo\nb) Acción de reparación\nc) Plan de acompañamiento individual\nd) Citación apoderado\ne) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Convivencia Escolar / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'S5', 
        type: 'gravisima', 
        name: '5. Reiteración de falsificación', 
        desc: 'Reiteración de conducta asociada a falsificación de firmas o información en comunicaciones, evaluaciones, trabajos o suplantación en evaluaciones orales.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'S6', 
        type: 'gravisima', 
        name: '6. Hechos constitutivos de delito', 
        desc: 'Presentar conductas que pudieran ser hechos constitutivos de delito y que impliquen intervención penal, judicial, pérdida de la libertad.', 
        measures: 'a) Separación de la estudiante del grupo\nb) Citación apoderado\nc) Acta de sanción u otra según contexto\nd) Expulsión', 
        resp: 'Profesor asignatura / Inspectoría General / Director(a)' 
    },
    { 
        id: 'S7', 
        type: 'gravisima', 
        name: '7. Reiteración de conducta agresiva', 
        desc: 'Reiteración de comportamientos, manifestaciones y/o conductas de carácter agresivo, explotador y/o amenazante contra la voluntad de otro compañero o cualquier integrante de la comunidad educativa.', 
        measures: 'a) Acción de reparación\nb) Citación apoderado\nc) Retiro anticipado de jornada\nd) Plan de acompañamiento individual\ne) Acta de sanción u otra según contexto', 
        resp: 'Convivencia Escolar / Profesor Jefe / Inspectoría General' 
    },
    { 
        id: 'S8', 
        type: 'gravisima', 
        name: '8. Portar armas de fuego o cortopunzantes', 
        desc: 'Transportar, poseer o utilizar armas de fuego o cortopunzantes dentro del colegio o en cualquier evento organizado por el mismo.', 
        measures: 'a) Separación del estudiante\nb) Diálogo reflexivo\nc) Plan acompañamiento individual\nd) Acta de sanción u otra según contexto', 
        resp: 'Profesor asignatura / Inspectoría General / Orientación' 
    },
    { 
        id: 'S9', 
        type: 'gravisima', 
        name: '9. Utilizar armas', 
        desc: 'Utilizar armas de fuego o cortopunzantes dentro del colegio o en cualquier evento organizado por el mismo.', 
        measures: 'a) Expulsión', 
        resp: 'Director(a)' 
    },
    { 
        id: 'S10', 
        type: 'gravisima', 
        name: '10. Robo con violencia', 
        desc: 'Robar con violencia o asaltar en el interior del colegio.', 
        measures: 'a) Diálogo reflexivo\nb) Acta de sanción u otra según contexto\nc) Expulsión', 
        resp: 'Orientación / Inspectoría General / Director(a)' 
    },
    { 
        id: 'S11', 
        type: 'gravisima', 
        name: '11. Hurto mayor', 
        desc: 'Hurtar cualquier especie cuyo valor sea igual o mayor a la mitad de una UTM.', 
        measures: 'a) Diálogo reflexivo\nb) Plan acompañamiento individual\nc) Citación apoderado\nd) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Inspectoría General' 
    },
    { 
        id: 'S12', 
        type: 'gravisima', 
        name: '12. Tomas u ocupaciones no autorizadas', 
        desc: 'Promover, incitar, participar y/o organizar tomas u ocupaciones no autorizadas de las dependencias del colegio.', 
        measures: 'a) Diálogo reflexivo\nb) Plan acompañamiento individual\nc) Citación apoderado\nd) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Inspectoría General' 
    },
    { 
        id: 'S13', 
        type: 'gravisima', 
        name: '13. Material pornográfico', 
        desc: 'Portar, almacenar, mostrar o difundir revistas, libros, folletos, fotos, videos o cualquier otro material pornográfico, así como acceder a sitios de este tipo en Internet.', 
        measures: 'a) Diálogo reflexivo\nb) Plan acompañamiento individual\nc) Citación apoderado\nd) Derivación a redes de apoyo\ne) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Profesor Jefe / Convivencia Escolar / Inspectoría General' 
    },
    { 
        id: 'S14', 
        type: 'gravisima', 
        name: '14. Acoso escolar (Bullying)', 
        desc: 'Ser responsable de situaciones que constituyan acoso escolar: burlas, hostigamiento, golpes, amenazas, rumores falsos, aislamiento social, sobrenombres hirientes, chantajear, intimidar, dentro o fuera del establecimiento, o a través de redes sociales.', 
        measures: 'a) Plan acompañamiento individual\nb) Citación apoderado\nc) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Convivencia Escolar / Inspectoría General' 
    },
    { 
        id: 'S15', 
        type: 'gravisima', 
        name: '15. Reiteración de fotos/videos con fines denostadores', 
        desc: 'Reiteración de tomar fotos y/o grabar videos con fines denostadores, y/o utilización de medios tecnológicos, redes sociales, inteligencia artificial para su difusión.', 
        measures: 'a) Diálogo reflexivo\nb) Citación apoderado\nc) Acción de reparación\nd) Trabajo académico\ne) Plan acompañamiento individual\nf) Suspensión de representación pública\ng) Eximición de licenciatura\nh) Acta de sanción u otra según contexto', 
        resp: 'Orientación / Inspectoría General / Convivencia Escolar' 
    }
];

// ==================== MEDIDAS DISPONIBLES ====================

const MEDIDAS_FORMATIVAS = [
    {
        id: 'MF1',
        name: 'Diálogo Reflexivo',
        desc: 'Conversación entre docente/directivo/inspector y el estudiante para reflexionar sobre la falta cometida y sus consecuencias, elaborando acuerdos concretos de cambio de conducta.'
    },
    {
        id: 'MF2',
        name: 'Servicio Comunitario',
        desc: 'Acciones individuales o colectivas que beneficien la comunidad escolar, relacionadas con la falta cometida (cooperar en aseo, reparación de infraestructura, apoyo en CRA, etc.).'
    },
    {
        id: 'MF3',
        name: 'Acción de Reparación',
        desc: 'Reparar el daño material o moral causado: pedir disculpas públicas o privadas, reponer artículos dañados, acompañar a la persona agredida.'
    },
    {
        id: 'MF4',
        name: 'Citación Apoderado',
        desc: 'Entrevista formal con el apoderado para comunicar hechos, recopilar información, notificar sanciones, orientar y comprometer en acciones específicas.'
    },
    {
        id: 'MF5',
        name: 'Acta de Compromiso',
        desc: 'Documento formal que establece compromisos de mejora de conducta. El incumplimiento inhabilita nueva firma y da paso a acta de sanción.'
    },
    {
        id: 'MF6',
        name: 'Restitución o Reparación de Bien',
        desc: 'Volver a poner una cosa en el estado en que estaba antes o dar una cosa similar en características y valor económico (plazo: 10 días hábiles).'
    },
    {
        id: 'MF7',
        name: 'Resolución Alternativa de Conflictos',
        desc: 'Mediación, negociación, arbitraje, rincón de paz o asambleas de aula para resolver conflictos de manera pacífica y formativa.'
    }
];

const MEDIDAS_PEDAGOGICAS = [
    {
        id: 'MP1',
        name: 'Trabajo Académico',
        desc: 'Investigación y reflexión sobre tema relacionado con la falta: confección de afiches, presentaciones, trabajos de investigación, charlas, campañas educativas (no incide en notas).'
    },
    {
        id: 'MP2',
        name: 'Retiro Anticipado de Jornada',
        desc: 'Medida extraordinaria y preventiva ante desregulación emocional severa o crisis de salud que impida la permanencia en el aula (no es sanción disciplinaria).'
    },
    {
        id: 'MP3',
        name: 'Reubicación de Curso',
        desc: 'Cambio a otro curso del mismo nivel como medida de apoyo ante situaciones de convivencia complejas o reiteradas.'
    }
];

const MEDIDAS_PSICOSOCIALES = [
    {
        id: 'MPS1',
        name: 'Plan de Acompañamiento Individual',
        desc: 'Programa de sesiones de trabajo con Convivencia Escolar para desarrollar habilidades que contribuyan a la sana convivencia.'
    },
    {
        id: 'MPS2',
        name: 'Plan de Acompañamiento al Curso (PAC)',
        desc: 'Sesiones de trabajo con la totalidad del curso para abordar problemáticas y apoyar necesidades psicoeducativas.'
    },
    {
        id: 'MPS3',
        name: 'Plan de Acompañamiento Estudiante y Familia (PAEF)',
        desc: 'Trabajo conjunto con estudiante y familia para generar cambios de conducta que interfieren en el proceso educativo.'
    },
    {
        id: 'MPS4',
        name: 'Derivación a Redes de Apoyo',
        desc: 'Derivación a institución competente según características de la situación (Cesfam, Centros Psicosociales, Red Sename, OPD, OLN, etc.).'
    }
];

const MEDIDAS_DISCIPLINARIAS = [
    {
        id: 'MD1',
        name: 'Suspensión de Representación Pública',
        desc: 'Exclusión de actividades de representación pública (desfiles, deportes, actividades culturales, salidas a terreno) por período determinado.'
    },
    {
        id: 'MD2',
        name: 'Eximición de Licenciatura',
        desc: 'Sanción para estudiantes de cuarto medio que no han modificado su conducta o por gravedad de la falta (no participación en ceremonia ni actividades extracurriculares).'
    },
    {
        id: 'MD3',
        name: 'Suspensión Temporal de Clases',
        desc: 'Prohibición de ingreso al establecimiento por período determinado (máximo 5 días hábiles, prorrogable una vez por igual período). Medida excepcional cuando existe riesgo real para la comunidad.'
    },
    {
        id: 'MD4',
        name: 'Acta de Sanción',
        desc: 'Documento formal que registra la falta cometida, medidas adoptadas y compromisos. El incumplimiento da paso a advertencia de condicionalidad.'
    },
    {
        id: 'MD5',
        name: 'Advertencia de Condicionalidad de Matrícula',
        desc: 'Acto preventivo ante condicionalidad. Vigencia de un semestre. El incumplimiento da lugar a condicionalidad de matrícula.'
    },
    {
        id: 'MD6',
        name: 'Condicionalidad de Matrícula',
        desc: 'Medida disciplinaria excepcional que pone en riesgo la continuidad del estudiante. Debe ser revisada semestralmente. El incumplimiento puede conllevar no renovación de matrícula.'
    },
    {
        id: 'MD7',
        name: 'No Renovación de Matrícula',
        desc: 'Decisión de no otorgar vacante para el año escolar siguiente. Se aplica cuando hay incumplimiento de condicionalidad o repitencia reiterada.'
    },
    {
        id: 'MD8',
        name: 'Cancelación de Matrícula',
        desc: 'Discontinuidad en el establecimiento para el año escolar siguiente. Solo aplicable tras debido proceso y cuando la integridad física/psíquica de la comunidad esté en riesgo.'
    },
    {
        id: 'MD9',
        name: 'Expulsión',
        desc: 'Sanción máxima que implica cancelación inmediata de matrícula. Solo aplicable tras debido proceso y cuando existe riesgo grave para la comunidad.'
    },
    {
        id: 'MD10',
        name: 'Aula Segura',
        desc: 'Procedimiento especial con suspensión cautelar inmediata ante faltas gravísimas (armas, agresiones con lesiones, agresiones sexuales, daños graves a infraestructura). Plazo máximo 10 días hábiles.'
    }
];
