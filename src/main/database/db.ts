import Database from 'better-sqlite3';
import { app } from 'electron'
import { join } from 'path'


const userDataPath = app.getPath('userData')
const dbPath = join(userDataPath, 'dev-planner.db')
const db = new Database(dbPath, { verbose: console.log })

db.exec(`
    CREATE TABLE IF NOT EXISTS proyectos (
    id_proyecto INTEGER PRIMARY KEY NOT NULL,
    nombre_proyecto TEXT NOT NULL,
    descripcion_proyecto TEXT,
    fecha_inicio_proyecto DATE,
    fecha_limite_proyecto DATE,
    horas_estimadas_proyecto REAL,
    color_proyecto TEXT,
    creado_en DATETIME
    );

    CREATE TABLE IF NOT EXISTS tareas (
    id_tarea INTEGER PRIMARY KEY NOT NULL,
    descripcion_tarea TEXT,
    tiempo_estimado_tarea REAL,
    tiempo_real_tarea REAL,
    estado TEXT CHECK(estado IN ('por_iniciar', 'en_progreso', 'terminado')),
    proyecto_id INTEGER NOT NULL,
    FOREIGN KEY (proyecto_id) REFERENCES proyectos(id_proyecto)


    );

    CREATE TABLE IF NOT EXISTS sesiones (
    id_sesion INTEGER PRIMARY KEY NOT NULL,
    descripcion_sesion TEXT,
    estado_sesion TEXT CHECK(estado_sesion IN ('pendiente', 'activa', 'completada')),
    notas_finales TEXT,
    inicio_sesion DATETIME,
    fin_sesion DATETIME,
    fecha_programada_sesion DATETIME,

    proyecto_id INTEGER NOT NULL,
    FOREIGN KEY (proyecto_id) REFERENCES proyectos(id_proyecto)
    );

    CREATE TABLE IF NOT EXISTS pomodoro (
    id_pomodoro INTEGER PRIMARY KEY NOT NULL,
    tiempo_definido REAl,
    sesion_id INTEGER NOT NULL,
    horario_inicio DATETIME,
    horario_fin DATETIME,
    tipo TEXT CHECK(tipo IN ('trabajo', 'descanso')),

    FOREIGN KEY (sesion_id) REFERENCES sesiones(id_sesion)
    );

    CREATE TABLE IF NOT EXISTS sesion_tarea (
    id_sesion INTEGER NOT NULL,
    id_tarea INTEGER NOT NULL,
    completada BOOLEAN DEFAULT FALSE,
    tiempo_real REAL,

    FOREIGN KEY (id_sesion) REFERENCES sesiones(id_sesion),
    FOREIGN KEY (id_tarea) REFERENCES tareas(id_tarea)
    );

    CREATE TABLE IF NOT EXISTS tecnologias (
    id_tecnologia INTEGER PRIMARY KEY NOT NULL,
    nombre_tecnologia TEXT,
    color TEXT
    );

    CREATE TABLE IF NOT EXISTS proyecto_tecnologia (
    id_proyecto INTEGER NOT NULL,
    id_tecnologia INTEGER NOT NULL,

    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_tecnologia) REFERENCES tecnologias(id_tecnologia)
    );

    CREATE TABLE IF NOT EXISTS configuracion (
    id_configuracion INTEGER PRIMARY KEY NOT NULL,
    horario_inicio TEXT,
    horario_fin TEXT,
    duracion_pomodoro REAL,
    duracion_descanso REAL,
    tiempo_aviso REAL,
    max_postergacion REAL,
    aviso_fin_pomodoro INTEGER,
    aviso_fin_descanso INTEGER
    );
    `)

export function getConfiguracion() {
    const row = db.prepare('SELECT * FROM configuracion LIMIT 1').get()
    return row || null
}


export default db