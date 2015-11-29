
::SchemaMigration
.create_table
.drop_table
.index_name
.normalize_migration_number
.normalized_versions
.primary_key
.table_exists?
.table_name
.version

::core
configurations
.new
.clone
.dup
.freeze
.frozen?
.inspect
pp ( pretty print )
.readonly!
.readonly?
.slice(*methods)


::Inheritance
initialize_dup(other)

::Scoping
initialize_internals_callback
populate_with_current_scope_attributes

::AtributeAssignment
.assign_attributes(new_attributes)
.attributes=(new_attributes)

ActiveModel::Conversion
.to_key
.to_model
.to_param
.to_partial_path

::Integration
.cache_key
.to_param

::Validations
.save(options={})
.save!(options={})
.valid?
.validate(context = nil)
.validate!(context = nil)

::AttributeMethods
[:attr_name]
[:attr_name] =value
.attribute_for_inspect
.attribute_present?
.attributes
.has_attribute?(attr_name)
.respond_to?(name)

::AttributeMethods::BeforeTypeCast
.attributes_before_type_cast
.read_attribute_before_type_cast(attr_name)

::AttributeMethods::ClassMethods
.attribute_method?(attribute)
.attribute_names
.class_method_defined_within?(name, klass...)
.column_for_attribute(name)
.dangerous_class_method?(method_name)
.instance_method_already_implemented?(method_name)

::AttributeMethods::PrimaryKey
.id
.id=(value)
.id?
.id_before_type_cast
.id_was
.to_key
.attribute_method?(attr_name)

::AttributeMethods::Query
.query_attribute(attr_name)

::AttributeMethods::Serialization::ClassMethods
.serialize(attr_name)
.serialized_attributes()

::AttributeMethods::Write
.raw_write_attribute(attr_name, value)
.write_attribute(attr_name, value)

::Sanitization::ClassMethods
.expand_hash_conditions_for_aggregates(attrs)
.sanitize_conditions(condition)
.sanitize_sql(condition)
.sanitize_sql_array(ary)
.sanitize_sql_for_assignment(assignments)
.sanitize_sql_for_conditions(condition)
.sanitize_sql_hash(attrs)
.sanitize_sql_hash_for_assignment(attrs, table)
.sanitize_sql_hash_for_conditions(attrs)
.sanitize_sql_like(string)

ActiveSupport::Callbacks
after(&call)
around(&call)
before(&call)
.build(callback...)
.call(env)
define_callbacks(*names)
get_callbacks
reset_callbacks
set_callback(name, *filter_list, &block)
skip_callbacks

::Timestamp
.record_timestamps
.default_timezone


ActiveModel::SecurePassword
has_secure_password
.authenticate
.password=
password_confirmation(unenecrupted pw)

::AutosaveAssociation
.changed_for_autosave?
.destroyed_by_association
.destroyed_by_association=
.mark_for_destruction
.marked_for_destruction?
.reload

::Aggregations
.compost_of(part_id, options={})

::Transactions
after_commit(*args, &block)
after_rollback(*args, &block)
.transaction(options = {}, &block)

::NoTouching
.no_touching
.no_touching?

::Reflection
.autosave=(autosave)
.compute_class
.klass
.reflect_on_aggregation(aggregation)
.reflect_on_all_aggregations
.reflect_on_all_associations(macro = nil)
.reflect_on_all_autosave_associations
.reflect_on_association(association)
.reflections

::Migration
.check_pending?(connection)
.disable_ddl_transaction!
.load_schema_if_pending!
migrate(direction)
announce(message)
.conection
.copy(options)
.down
.exec_migration(conn, direction)
.method_missing(method, *args)
.migrate(direction)
.next_migration_number(number)
.proper_table_name(name, options)
.reversible
.revert
.reverting?
.run
.say(message)
.say_with_time
.supress_messages
.table_name_options(config)
.up
.write(text)


