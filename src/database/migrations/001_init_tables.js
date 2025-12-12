exports.up = async function(knex) {
await knex.schema
.createTable('profissionais', (table) => {
table.increments('id').primary();
table.string('nome', 150).notNullable();
table.string('cpf', 20).unique().notNullable();
table.string('cns', 30);
table.string('cbo', 20);
table.string('municipio', 100);
table.string('uf', 2);
})

.createTable('unidades', (table) => {
table.increments('id').primary();
table.string('cnes', 20).unique().notNullable();
table.string('nome_fantasia', 150);
table.string('nome_empresarial', 150);
table.string('tipo_estabelecimento', 50);
table.string('subtipo', 50);
table.string('municipio', 100);
table.string('uf', 2);
})

.createTable('vacinas', (table) => {
table.increments('id').primary();
table.string('nome_vacina', 150).notNullable();
table.string('fabricante', 100);
table.string('lote', 50);
table.date('validade');
table.text('protecao');
table.integer('quantidade').defaultTo(0);
table.date('data_cadastro');
table.string('nome_profissional', 150);
table.string('cpf_profissional', 20);
})

.createTable('transferencias', (table) => {
table.increments('id').primary();
table.integer('vacina_id').unsigned().notNullable();
table.integer('estabelecimento_origem').unsigned().notNullable();
table.integer('estabelecimento_destino').unsigned().notNullable();
table.integer('quantidade_transferida').notNullable();
table.date('data_transferencia');
table.string('nome_profissional', 150);
table.string('cpf_profissional', 20);


table.foreign('vacina_id').references('vacinas.id').onDelete('RESTRICT').onUpdate('CASCADE');
table.foreign('estabelecimento_origem').references('unidades.id').onDelete('RESTRICT').onUpdate('CASCADE');
table.foreign('estabelecimento_destino').references('unidades.id').onDelete('RESTRICT').onUpdate('CASCADE');
})

.createTable('doses', (table) => {
table.increments('id').primary();
table.integer('vacina_id').unsigned().notNullable();
table.string('nome_paciente', 150);
table.string('cpf_paciente', 20);
table.date('data_aplicacao');
table.string('lote', 50);
table.integer('quantidade');
table.string('profissional_nome', 150);


table.foreign('vacina_id').references('vacinas.id').onDelete('RESTRICT').onUpdate('CASCADE');
})

.createTable('agendamentos', (table) => {
table.increments('id').primary();
table.string('nome_paciente', 150);
table.string('cpf_paciente', 20);
table.date('data');
table.string('vacina', 150);
});
};

exports.down = async function(knex) {
await knex.schema
.dropTableIfExists('agendamentos')
.dropTableIfExists('doses')
.dropTableIfExists('transferencias')
.dropTableIfExists('vacinas')
.dropTableIfExists('unidades')
.dropTableIfExists('profissionais');
};